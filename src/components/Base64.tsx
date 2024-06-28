interface Props {
  encoded: string;
}

export default function Base64({ encoded }: Props) {
  let decoded = atob(encoded);
  return <span>{decoded}</span>;
}
