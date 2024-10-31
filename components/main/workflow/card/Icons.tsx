import Image from "next/image";
interface IconsType {
  [key: string]: JSX.Element;
}

export const icons: IconsType = {
  "Initial Consultation and Quote": (
    <Image src="/human.svg" alt="Initial Consultation" width={16} height={16} />
  ),
  "Comprehensive Planning": (
    <Image
      src="/planning.svg"
      alt="Comprehensive Planning"
      width={16}
      height={16}
    />
  ),
  "Packing and Preparation": (
    <Image
      src="/packing.svg"
      alt="Packing and Preparation"
      width={16}
      height={16}
    />
  ),
  "Loading and Transportation": (
    <Image
      src="/loading.svg"
      alt="Loading and Transportation"
      width={16}
      height={16}
    />
  ),
  "Unpacking ": (
    <Image src="/unpacking.svg" alt="Unpacking" width={16} height={16} />
  ),
  "Final Inspection": (
    <Image
      src="/inspection.svg"
      alt="Final Inspection"
      width={16}
      height={16}
    />
  ),
};
