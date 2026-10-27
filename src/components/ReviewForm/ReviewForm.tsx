import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import styles from './ReviewForm.module.css'

interface ReviewFormValues {
  name: string
  email: string
  rating: string
  comment: string
}

interface ReviewFormProps {
  productTitle: string
}

const RATINGS = ['1', '2', '3', '4', '5']

export default function ReviewForm({ productTitle }: ReviewFormProps) {
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    mode: 'onTouched',
    defaultValues: { name: '', email: '', rating: '', comment: '' },
  })

  const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
    // Отзывы пока никуда не отправляются: API для них нет
    console.log({ ...data, rating: Number(data.rating) })
    setSubmittedName(data.name)
    reset()
  }

  return (
    <section className={styles.section} aria-labelledby="review-heading">
      <div className={styles.intro}>
        <h2 id="review-heading" className={styles.heading}>
          Write a review
        </h2>
        <p className={styles.lead}>Share what you think about {productTitle}.</p>
      </div>

      {submittedName ? (
        <div className={styles.success} role="status">
          <p className={styles.successTitle}>Thanks, {submittedName}!</p>
          <p className={styles.successText}>Your review has been received.</p>
          <button
            type="button"
            className={styles.link}
            onClick={() => setSubmittedName(null)}
          >
            Write another review
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                type="text"
                autoComplete="name"
                aria-invalid={errors.name ? 'true' : 'false'}
                {...register('name', {
                  required: 'Enter your name',
                  minLength: { value: 2, message: 'Name is too short' },
                })}
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input
                className={styles.input}
                type="email"
                autoComplete="email"
                aria-invalid={errors.email ? 'true' : 'false'}
                {...register('email', {
                  required: 'Enter your email',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                })}
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </label>
          </div>

          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>Rating</legend>
            <div className={styles.ratings}>
              {RATINGS.map((value) => (
                <label key={value} className={styles.ratingItem}>
                  <input
                    className={styles.ratingInput}
                    type="radio"
                    value={value}
                    {...register('rating', { required: 'Choose a rating' })}
                  />
                  <span className={styles.ratingOption}>{value}</span>
                </label>
              ))}
            </div>
            {errors.rating && <span className={styles.error}>{errors.rating.message}</span>}
          </fieldset>

          <label className={styles.field}>
            <span className={styles.label}>Review</span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              rows={4}
              aria-invalid={errors.comment ? 'true' : 'false'}
              {...register('comment', {
                required: 'Write a few words',
                minLength: { value: 10, message: 'At least 10 characters' },
                maxLength: { value: 500, message: 'No more than 500 characters' },
              })}
            />
            {errors.comment && <span className={styles.error}>{errors.comment.message}</span>}
          </label>

          <button type="submit" className={styles.submit}>
            Submit review
          </button>
        </form>
      )}
    </section>
  )
}
