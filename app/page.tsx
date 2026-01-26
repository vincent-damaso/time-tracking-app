"use client";

export default function Home() {
  return (
    <form  action={handleForm}>
      <div>
        <label>Question 1</label>
        <input name="q1" required />
      </div>
      <div>
        <label>Question 2</label>
        <input name="q2" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
