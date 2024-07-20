import useNavigationContext from '../hooks/use-navigation-context';

function Link({ to, children }) {
    const { navigate, currentPath } = useNavigationContext();

    const handleClick = (event) => {
        event.preventDefault();

        navigate(to);
    };

    return <a onClick={handleClick}>{children}</a>;
}

export default Link;
