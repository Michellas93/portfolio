import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
  label?: string;
  register: UseFormRegisterReturn;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Field = ({ error, label, register, ...inputProps }: Props) => {
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
      <input
        {...inputProps}
        {...register}
        className="input w-full p-3 rounded mb-4 border-2 border-darkGreen "
      />
    </div>
  );
};
