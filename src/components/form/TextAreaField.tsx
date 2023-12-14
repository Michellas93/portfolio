import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
  label?: string;
  register: UseFormRegisterReturn;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextAreaField = ({ error, label, register, ...rest }: Props) => {
  return (
    <div className="form-group w-full">
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
      {label && (
        <label className="block text-left">
          <span className="block text-sm font-medium text-slate-600">
            {label}
          </span>
        </label>
      )}
      <textarea
        {...rest}
        {...register}
        className="input w-full p-3 rounded mb-4 border-2 border-darkGreen "
      />
    </div>
  );
};
