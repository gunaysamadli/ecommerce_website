import className from 'classnames';
import { GoSync } from 'react-icons/go'

function Button({
  children,
  base,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    'd-flex align-items-start px-4 py-2 rounded',
    {
      'opacity-80': loading,
      'border-dark bg-dark text-white': base,
      'border-primary bg-primary text-white': primary,
      'border-secondary bg-secondary text-white': secondary,
      'border-success bg-success text-white': success,
      'border-warning bg-warning text-white': warning,
      'border-danger bg-danger text-white': danger,
      'rounded-circle': rounded,
      'bg-white': outline,
      'text-primary': outline && primary,
      'text-secondary': outline && secondary,
      'text-success': outline && success,
      'text-warning': outline && warning,
      'text-danger': outline && danger,
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className='animate-spin' /> : children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
