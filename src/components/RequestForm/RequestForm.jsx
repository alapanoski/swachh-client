export default function RequestForm() {
  return (
    <form>
      <label>
        Request Description:
        <input type="text" name="description" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
