import { ComponentProps } from "react";

export default function AuthLayout(props: ComponentProps<"div">) {
  return (
    <div className="h-full flex justify-center items-center">
      {props.children}
    </div>
  );
}
