gsap.registerPlugin(SplitText);

gsap.set("h1", { opacity: 1 });
gsap.set("p", { opacity: 1 });

let split = SplitText.create("#heading", { type: "chars" });
//now animate each character into place from 20px below, fading in:
gsap.from(split.chars, {
  y: 20,
  autoAlpha: 0,
  stagger: 0.05
});

let messagesplit = SplitText.create("#message", { type: "chars" });
gsap.from(messagesplit.chars, {
  y: 10,
  autoAlpha: 0,
  stagger: 0.05,
  delay: 1
});
