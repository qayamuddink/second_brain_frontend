
interface InputRef {
    placeholder: string;
    reference: any;
  }
  
  export function Input({ placeholder, reference }: InputRef) {
    return (
      <div className="w-full"> 
        <input
          ref={reference}
          type="text"
          className="w-full px-4 py-2 border rounded m-2"
          placeholder={placeholder}
        />
      </div>
    );
  }