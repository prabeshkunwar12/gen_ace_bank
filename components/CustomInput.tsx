import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath } from 'react-hook-form';
import { z } from "zod"
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up');

type CustomInputProps = {
  control: Control<z.infer<typeof formSchema>>// Replace 'any' with the actual type of your form
  name: FieldPath<z.infer<typeof formSchema>>; 
  label?: string;
  inputType?: string;
  placeholder?: string;
}

const CustomInput = ({control, name, label, inputType, placeholder}: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className='flex w-full flex-col'>
                        <FormControl>
                            <Input
                                placeholder={placeholder}
                                className='input-class'
                                type={inputType || 'text'}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput