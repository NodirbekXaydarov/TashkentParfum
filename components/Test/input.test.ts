import {describe, expect, it} from "vitest";
import {mount} from "@vue/test-utils";
import Input from "./Input.vue";


describe("Test Input", () => {

    it("get value input", async() => {
        const wrapper = mount(Input);
        const email = wrapper.find("input");

        await email.setValue("exampl@gmail.com");
        expect(email.element.value).toBe("exampl@gmail.com")
    });

    it("get Button", async() => {
        const wrapper = mount(Input);
        await const btn = wrapper.find("button").trigger("submit");

        expect(btn.emitted()).toHaveProperty("submit") 
    })
})
