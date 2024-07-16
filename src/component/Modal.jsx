import ReactDOM from 'react-dom';

function Modal({ children, actionBar }) {
  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-gray-200 opacity-80"></div>
      <div className="fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] p-10 w-[350px] h-[300px] rounded-xl bg-white flex flex-col justify-between items-center">
        <div>{children}</div>
        <div className="w-full">{actionBar}</div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
