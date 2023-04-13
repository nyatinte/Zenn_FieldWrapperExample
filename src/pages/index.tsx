import { NextPage } from 'next';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField, SelectField } from '@/components/Form';
import {
  favoriteColor,
  favoriteColorSelectOptions,
} from '@/constants/favoriteColor';
import { Button } from '@/components/Elements';

const schema = z.object({
  name: z.string().min(1, '名前を入力して下さい'),
  favoriteColor: z.enum(favoriteColor, {
    errorMap: () => ({
      message: '好きな色を選択して下さい',
    }),
  }),
  comment: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;
const SampleForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const text = `${data.name}さんの好きな色は${data.favoriteColor}なんですね！`;
    alert(text);
  };

  const onSubmitError: SubmitErrorHandler<FormValues> = (errors) => {
    console.log(getValues());
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
      className='h-screen bg-white container p-5 flex flex-col gap-4'
    >
      <h1 className='text-lg'>あなたのことを教えて下さい!</h1>
      <InputField
        label='名前'
        error={errors.name?.message}
        {...register('name')}
      />
      <SelectField
        label='好きな色'
        options={favoriteColorSelectOptions}
        error={errors.favoriteColor?.message}
        {...register('favoriteColor')}
      />
      <InputField
        label='コメント'
        description='※回答は任意です'
        error={errors.comment?.message}
        {...register('comment')}
      />
      <Button className='mt-4' type='submit'>
        送信
      </Button>
    </form>
  );
};

export default SampleForm;
