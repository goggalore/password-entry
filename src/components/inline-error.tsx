/**
 * This is extra for a demo application, but you would want to consider
 * generalization + consistency + scalability of your applications.
 *
 * Writing generic error components is a good idea so that error pages
 * can share the same error design and its consistent across the website as a whole
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