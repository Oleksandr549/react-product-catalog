import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import styles from './ReviewForm.module.css'

const RATINGS = ['1', '2', '3', '4', '5'] as const

const reviewSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Enter your name')
    .min(2, 'Name is too short')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .trim()
    .min(1, 'Enter your email')
    .pipe(z.email('Enter a valid email')),
  rating: z.enum(RATINGS, { error: 'Choose a rating' }),
  comment: z
    .string()
    .trim()
    .min(1, 'Write a few words')
    .min(10, 'At least 10 characters')
    .max(500, 'No more than 500 characters'),
})

type ReviewFormValues = z.infer<typeof reviewSchema>

interface ReviewFormProps {
  productTitle: string
}

export default function ReviewForm({ productTitle }: ReviewFormProps) {
  const [submittedName, setSubmittedName] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    mode: 'onTouched',
    resolver: zodResolver(reviewSchema),
    defaultValues: { name: '', email: '', comment: '' },
  })

  const onSubmit: SubmitHandler<ReviewFormValues> = (data) => {
  
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
                {...register('name')}
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
                {...register('email')}
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
                    {...register('rating')}
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
              {...register('comment')}
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
