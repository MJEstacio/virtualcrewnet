export const EmailTemplate = ({ name, email, number, message }: any) => (
  <div>
    <p>Hello Islay</p>
    <p>
      {name} has submitted the contact form on your website. Their email is{" "}
      {email}.
    </p>
    <p>Contact Number: {number}</p>
    <p>Message: {message}</p>
  </div>
);
