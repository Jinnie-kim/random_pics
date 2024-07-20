import classNames from 'classnames';

function Button({ children, text, icon, ...rest }) {
    const classes = classNames(rest.className, 'bg-rose-50', {
        'w-[60px] h-[30px] border-2 rounded-xl border-rose-500 text-gray-400 hover:text-rose-500 font-medium': text,
        'p-1 mr-1 rounded': icon,
    });

    return (
        <button type="button" {...rest} className={classes}>
            {children}
        </button>
    );
}

export default Button;
