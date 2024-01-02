import { Control, Controller, FieldError } from "react-hook-form";

interface FileInputProps {
  control: Control<any>;
  name: string;
  rules: object;
  error?: FieldError;
}

const FileInput = ({ control, name, rules, error }: FileInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value, ref, ...field } }) => (
        <>
          <label className="block text-left">
            <span className="block text-sm font-medium text-slate-600">
              Fotka
            </span>
          </label>
          <input
            {...field}
            type="file"
            id={name}
            onChange={(e) => {
              if (e.target.files?.[0]) {
                onChange(e.target.files[0]);
              }
            }}
            onBlur={onBlur}
            ref={ref}
            className="input w-full p-3 rounded mb-1 border border-darkGreen"
          />
          {error && (
            <span className="text-red-500 text-xs">{error.message}</span>
          )}
        </>
      )}
    />
  );
};

export default FileInput;
