// import styles from './ProductForm.module.css'
// import { Controller, useForm, type SubmitErrorHandler, type SubmitHandler } from 'react-hook-form'

// interface MyForm {
//     name : string;
//     age : number;
// }
// export default function ProductForm() {

//     const {
//         register,
//         handleSubmit,
//         control,
//         // watch, 
//         clearErrors, 
//         setValue, 
//         reset, 
//         formState: {errors, isValid}
//     } = useForm<MyForm>({
//         mode: 'onChange',
//         defaultValues: {
//             age: 0,
//         }
//     });
//     const submit: SubmitHandler<MyForm> = (data) => {
//         console.log(data)
//         reset({
//             age: 0,
//             name: ""
//         })
//     }
//     const error: SubmitErrorHandler<MyForm> = data => {
//         console.log(data)
//     }
//     // const isName = () => {
//     //     console.log('Done')
//     //     return true
//     // }
//     return (
//         <>
//     <form className={styles.form} onSubmit={handleSubmit(submit, error)}>
//         <input type="text"  {...register('name', {
//              required: true,
//              minLength: {
//                 value: 3,
//                 message: 'Name must be at least 3 characters long'
//              },
//             // validate: isName
//             })} aria-invalid={errors.name ? true : false} />
//         <span className={styles.error}>{errors?.name && errors?.name?.message }</span>
//         {/* <input type="number" {...register('age', { required: true })} /> */}
//         <Controller 
//             name="age"
//             control={control}
//             rules={{ required: true }}
//             render={({ field }) => (
//                 <input
//                     {...field}
//                     // type="text"
//                     // aria-invalid={errors.name ? true : false}
//                 />
//             )}
//         />
        
        
//         <span className={styles.error}>{errors?.age && errors?.age?.message }</span>
//         <button disabled={!isValid}>Submit</button>
//         <button type="button" onClick={() => clearErrors()}>
//             Clear Errors
//         </button>
//         <button type="button" onClick={() => reset({
//             age: 0,
//             name: ""
//         })}>
//             Clear Form
//         </button>
//         <button type="button" onClick={() => setValue(
//             'name', "John"
//         )}>
//             Set Name to "John"
//         </button>
//     </form>
//     {/* {watch('name') } */}
//         </>
//     )
// }