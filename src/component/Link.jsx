import useNavigation from '../hooks/use-navigation';

function Link({ to, children }) {
  const { navigate, currentPath } = useNavigation();

  const handleClick = (event) => {
    event.preventDefault();

    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
