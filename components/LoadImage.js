import Image from "next/image";
import { useState } from "react";
import cn from "clsx";

function LoadImage(props) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      className={cn(
        props.className,
        "duration-50",
        isLoading ? "blur-md" : "blur-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default LoadImage;
