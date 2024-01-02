/**
 * This component is arguably unnecessary since it's only used in one place and has so little content,
 * but generalization + consistency + scalability of applications is important.
 *
 * So, this was written just to show the idea of a more generic component that could be used
 * on multiple pages for consistent design and component reuse.
 */
interface InlineErrorProps {
  errorMessage: string
}
export default function InlineError({ errorMessage }: InlineErrorProps) {
  return (
    <>
      <h2>Oops!</h2>
      <p>{errorMessage}</p>
    </>
  )
}