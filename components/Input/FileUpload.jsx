import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Input.module.css';

const FileUpload = forwardRef(function Input(
  {
    label,
    placeholder,
    className,
    htmlType,
    autoComplete,
    size,
    ariaLabel,
    required,
    accept, // New prop for file input
    onChange, // New prop for file input
  },
  ref
) {
  return (
    <div className={clsx(styles.root, className)}>
      <label>
        {label && <div className={styles.label}>{label}</div>}
        {htmlType !== 'file' ? (
          <input
            type={htmlType}
            autoComplete={autoComplete}
            placeholder={placeholder}
            ref={ref}
            className={clsx(styles.fileinput, size && styles[size])}
            aria-label={ariaLabel}
            required={required}
          />
        ) : (
          <input
            type="file"
            accept={accept}
            ref={ref}
            className={clsx(styles.fileinput, size && styles[size])}
            aria-label={ariaLabel}
            required={required}
            onChange={onChange}
          />
        )}
      </label>
    </div>
  );
});

export default FileUpload;