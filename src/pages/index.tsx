import { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField, SelectField } from '@/components/Form';
import { favoriteColor } from '@/constants/favoriteColor';

const schema = z.object({
  name: z.string().min(1).max(10),
  favoriteColor: z.enum(favoriteColor),
  comment: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;
const SampleForm: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const text = `${data.name}さんの好きな色は${data.favoriteColor}なんですね！`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>あなたのことを教えて下さい!</h1>
      <InputField
        label='名前'
        error={errors.name?.message}
        {...register('name')}
      />
      <SelectField label='好きな色' {...register('favoriteColor')} />
      <InputField
        label='コメント'
        error={errors.comment?.message}
        {...register('comment')}
      />
    </form>
  );
};

export default SampleForm;
