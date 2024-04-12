interface EmailTemplateProps {
  name: string;
  email: string;
  number: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  number,
  message,
}: EmailTemplateProps) => (
  <div>
    <h3>Name: {name}</h3>
    <h2>Email: {email}</h2>
    <p>Contact Number: {number}</p>
    <p>Message:</p>
    <p>{message}</p>
  </div>
);
