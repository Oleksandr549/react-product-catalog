import styles from './ProductForm.module.css'
import { useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'

interface MyForm {
    name : string;
    age : number;
}
export default function ProductForm() {

    const {register, handleSubmit, clearErrors, setValue, reset, formState: {errors}} = useForm<MyForm>({
        defaultValues: {
            age: 0,
        }
    });
    const submit: SubmitHandler<MyForm> = (data) => {
        console.log(data)
    }
    const error: SubmitErrorHandler<MyForm> = data => {
        console.log(data)
    }
    const isName = () => {
        console.log('Done')
        return true
    }
    return (
        <>
    <form className={styles.form} onSubmit={handleSubmit(submit, error)}>
        <input type="text"  {...register('name', {
             required: true,
            validate: isName})} aria-invalid={errors.name ? true : false} />
        <input type="number" {...register('age', { required: true })} />
        {/* <span className={styles.error}>{error}</span> */}
        <button>Submit</button>
        <button type="button" onClick={() => clearErrors()}>
            Clear Errors
        </button>
        <button type="button" onClick={() => reset({
            age: 0,
            name: ""
        })}>
            Clear Form
        </button>
        <button type="button" onClick={() => setValue(
            'name', "John"
        )}>
            Set Name to "John"
        </button>
    </form>
        </>
    )
}