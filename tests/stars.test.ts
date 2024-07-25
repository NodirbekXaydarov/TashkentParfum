import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import CommonStars from "~/components/Common/Stars.vue";

describe("CommonStars", () => {
  it("renders the correct rating", () => {
    const wrapper = mount(CommonStars, {
      props: {
        rating: 3.5,
        ratingPos: "left",
      },
    });
    const ratingElement = wrapper.find("span");

    expect(ratingElement.text()).toBe("3.5");
  });

  it("calculates the correct star width", () => {
    const wrapper = mount(CommonStars, {
      props: {
        rating: 3.5,
      },
    });
    const stars = wrapper.findAll(".star-rating span");
    expect(stars[0].attributes().style).toBe("width: 100%;");
    expect(stars[1].attributes().style).toBe("width: 100%;");
    expect(stars[2].attributes().style).toBe("width: 100%;");
    expect(stars[3].attributes().style).toBe("width: 50%;");
    expect(stars[4].attributes().style).toBe("width: 0%;");
  });
});
