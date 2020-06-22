new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  sectionsColor: [
    "#ffffff",
    "#E23349",
    "#EE724C",
    "#FBE960",
    "#80D87F",
    "#5DA4D9",
    "#4E3686",
    "#E23349",
    "#EE724C",
    "#FBE960",
    "#80D87F",
    "#5DA4D9",
    "#4E3686",
    "#E23349",
    "#EE724C",
    "#FBE960",
    "#80D87F",
    "#5DA4D9",
    "#4E3686",
    "#E23349",
    "#EE724C",
    "#FBE960",
    "#80D87F",
    "#5DA4D9",
    "#4E3686",
    "#E23349",
    "#EE724C",
    "#FBE960",
    "#80D87F",
    "#5DA4D9",
    "#4E3686",
    "#E23349",
    "#EE724C",
    "#FBE960",
    "#80D87F",
    "#5DA4D9",
    "#4E3686",
    "#E23349",
    "#FFFFFF",
  ],
  onLeave: (origin, destination, direction) => {
    const section = destination.item;

    const text = section.querySelectorAll(".quote");
    const image = section.querySelectorAll(".picture");

    const tl = new TimelineMax({ delay: 0.5 });

    tl.fromTo(text, 1, { opacity: 0 }, { opacity: 1 });
    tl.fromTo(image, 2, { opacity: 0 }, { opacity: 1 });
  },
});
