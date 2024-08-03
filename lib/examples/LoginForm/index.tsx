import { Button, Input, Typography } from '@/components'
import { Label } from '@/components/Label'

export const LoginForm = () => {
  return (
    <div className='rounded-xl border px-8 py-12'>
      <div className='flex flex-col'>
        <Typography as='h2' variant='h2' className='mb-2 text-center'>
          Login
        </Typography>

        <Typography as='span' className='mb-8'>
          Please enter your credentials to login
        </Typography>

        <div className='flex flex-col gap-2'>
          <Label htmlFor='username'>Username</Label>
          <Input
            type='text'
            id='username'
            placeholder='Username'
            className='mb-4'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <Label htmlFor='password'>Password</Label>
          <Input id='password' type='password' placeholder='Password' />
        </div>

        <Button type='submit' className='mt-10'>
          Login
        </Button>
      </div>
    </div>
  )
}
