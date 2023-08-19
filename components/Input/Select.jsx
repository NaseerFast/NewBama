import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Input.module.css';

const Select = forwardRef(function Select(
  {
    label,
    options,
    className,
    size,
    ariaLabel,
    required,
    defaultValue,
  },
  ref
) {
  return (
    <div className={clsx(styles.root, className)}>
      <label>
        {label && <div className={styles.label}>{label}</div>}
        <select
          ref={ref}
          className={clsx(styles.input, size && styles[size])}
          aria-label={ariaLabel}
          required={required}
          defaultValue={defaultValue}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
});

export default Select;