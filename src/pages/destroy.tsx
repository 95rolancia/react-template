import { deleteContact } from "contact";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export async function action({ params }: ActionFunctionArgs) {
  const id = params.id;
  if (id == null) {
    throw new Response("", {
      status: 404,
      statusText: `id: ${id} doesn't exist`,
    });
  }

  await deleteContact(id);
  return redirect("/");
}
