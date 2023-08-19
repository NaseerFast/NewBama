import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Input.module.css';

const DateInput = forwardRef(function DateInput(
  {
    label,
    placeholder,
    className,
    autoComplete,
    size,
    ariaLabel,
    required,
  },
  ref
) {
  return (
    <div className={clsx(styles.root, className)}>
      <label>
        {label && <div className={styles.label}>{label}</div>}
        <input
          type="date" // Set the input type to 'date'
          autoComplete={autoComplete}
          placeholder={placeholder}
          ref={ref}
          className={clsx(styles.input, size && styles[size])}
          aria-label={ariaLabel}
          required={required}
        />
      </label>
    </div>
  );
});

export default DateInput;