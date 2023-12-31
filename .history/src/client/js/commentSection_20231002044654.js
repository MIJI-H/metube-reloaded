const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteIcon = document.querySelectorAll(".delete__icon");

const addComment = (text,id) => {
    const videoComments = document.querySelector(".video__comments ul");
    const newComment = document.createElement("li");

    newComment.dataset.id = id;

  //   newComment.className = "video__comment";
  //   const icon = document.createElement("i");
  //   icon.className = "fas fa-comment";
  //   const span = document.createElement("span");
  //   span.innerText = ` ${text}`;
  //   const span2 = document.createElement("span");
  // span2.innerText = "❌";
  const icon = document.createElement("i");
	const span = document.createElement("span");
	const deleteIcon = document.createElement("span");

	newComment.className = "video__comment";
	icon.className = "comment__icon";
	deleteIcon.className = "delete__icon";

	newComment.appendChild(icon);
	icon.innerText = "💛";

	span.innerText = ` ${text}`;
	deleteIcon.innerText = "❌";

    newComment.appendChild(icon);
    newComment.appendChild(span);
    videoComments.prepend(newComment);
    deleteIcon.addEventListener("click", handleDelete);
  };

const handleSubmit = async(event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }

};

if (form) {
    form.addEventListener("submit", handleSubmit);
  }

  if (deleteIcon) {
    deleteIcon.forEach((icon) => icon.addEventListener("click", handleDelete));
  }