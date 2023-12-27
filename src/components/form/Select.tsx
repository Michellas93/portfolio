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
    <div className="form-group mb-4">
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
      {label && (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <span className="block text-sm font-medium text-slate-600">
            {label}
          </span>
        </label>
      )}
      <select
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500 "
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
