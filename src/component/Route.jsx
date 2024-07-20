import useNavigationContext from '../hooks/use-navigation-context';

function Route({ path, children }) {
    const { currentPath } = useNavigationContext();

    if (path === currentPath) {
        return children;
    }

    return null;
}

export default Route;
