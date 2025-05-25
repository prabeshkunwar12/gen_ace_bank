"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form
} from "@/components/ui/form"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const AuthForm = ({type}:{ type:string }) => {
    const {user, setUser} = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const formSchma = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchma>>({
        resolver: zodResolver(formSchma),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    
    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchma>) =>{
        setIsLoading(true)
        console.log(values)
        setIsLoading(false)
    }

    return (
        <section className='auth-form'>
            <header className='flex flex-col gap-5 md:gap-8'>
                <Link href="/" className='flex cursor-pointer items-center gap-1'>
                    <Image
                        src="/icons/logo.svg"
                        width={34}
                        height={34}
                        alt="logo"
                    />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
                        Gen Ace
                    </h1>
                </Link>
                <div className='flex flex-col gap-1 md:gap-3'>
                    <h1 className='text-34 lg:text-36 font-semibold text-gray-900'>
                        {user 
                            ? 'Link Account'
                            : type === 'sign-in'
                            ? 'Sign In'
                            : 'Sign Up'
                        }
                        <p className='text-16 font-normal text-gray-600'>
                            {user 
                                ? 'Link your account to get started'
                                : 'Please enter your details to continue'
                            }
                        </p>
                    </h1>
                </div>
            </header>
            {user
                ? (
                    <div className='flex flex-col gap-4'>{
                        /* Plaid Link */}
                    </div>
                )
                : (
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                                {type === 'sign-up' && (
                                    <>
                                        <div className='flex gap-4'>
                                            <CustomInput 
                                                control={form.control}
                                                name='firstName' 
                                                label='First Name' 
                                                placeholder='Enter your First Name' 
                                            />
                                            <CustomInput 
                                                control={form.control}
                                                name='lastName' 
                                                label='Last Name' 
                                                placeholder='Enter your Last Name' 
                                            />
                                        </div>
                                        <div className='flex gap-4'>
                                            <CustomInput 
                                                control={form.control}
                                                name='address' 
                                                label='Address' 
                                                placeholder='Enter your specific address' 
                                            />
                                            <CustomInput 
                                                control={form.control}
                                                name='city' 
                                                label='City' 
                                                placeholder='Enter your city'
                                            />
                                        </div>
                                        <div className='flex gap-4'>
                                            <CustomInput 
                                            control={form.control}
                                            name='state' 
                                            label='State/Province'
                                            placeholder='Eg: ON'
                                            />
                                            <CustomInput 
                                                control={form.control}
                                                name='postalCode'
                                                label='Postal Code'
                                                placeholder='A2B3C4' 
                                            />
                                            <CustomInput 
                                                control={form.control}
                                                name='country' 
                                                label='Country' 
                                                placeholder='Enter your country'
                                            />
                                        </div>
                                        <div className='flex gap-4 w-full justify-between'>
                                            <CustomInput
                                                control={form.control}
                                                name='dateOfBirth'
                                                label='Date of Birth'
                                                placeholder='yyyy-mm-dd'
                                                inputType='date'
                                            />
                                            <CustomInput
                                                control={form.control}
                                                name='ssn'
                                                label='SSN'
                                                placeholder='1234'
                                            />
                                        </div>
                                    </>
                                )}

                                <CustomInput 
                                    control={form.control}
                                    name='email' 
                                    label='Email' 
                                    inputType='email' 
                                    placeholder='Enter your email' 
                                />
                                <CustomInput 
                                    control={form.control} 
                                    name='password'
                                    label='Password' 
                                    inputType='password' 
                                    placeholder='Enter your password' 
                                />
                                <div className='flex flex-col gap-4'>
                                    <Button 
                                        type="submit" 
                                        className='form-btn'
                                        disabled={isLoading}
                                    >
                                        {isLoading 
                                            ? <>
                                                <Loader2 size={20} className="animate-spin" /> &nbsp;Loading...
                                            </>
                                            : type === 'sign-in'
                                                ? 'Sign In'
                                                : 'Sign Up'
                                        }
                                    </Button>
                                </div>
                            </form>
                        </Form>
                        <footer className='flex justify-center gap-1'>
                            <p className='text-14 font-normal text-gray-600'>
                                {type === 'sign-in'
                                    ? 'Don\'t have an account?'
                                    : 'Already have an account?'
                                }
                            </p>
                            <Link 
                                href={type === 'sign-in' ? '/sign-up' : '/sign-in'} 
                                className='form-link'
                            >
                                <p className='text-blue-1 font-semibold'>
                                    {type === 'sign-in'
                                        ? 'Sign Up'
                                        : 'Sign In'
                                    }
                                </p>
                            </Link>
                        </footer>
                    </>
                )
            }
        </section>
    )
}

export default AuthForm