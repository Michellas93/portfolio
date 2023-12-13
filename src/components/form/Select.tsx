import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type SelectOption = {
  value: string | number;
  label: string;
};

type Props = {
  error: FieldError | undefined;
  label?: string;
  register: UseFormRegisterReturn;
  options: SelectOption[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  error,
  label,
  register,
  options,
  ...props
}: Props) => {
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
      <select
        className="input w-full p-3 rounded mb-4 border-2 border-darkGreen "
        {...props}
        {...register}
      >
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
