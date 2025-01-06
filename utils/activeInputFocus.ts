export const activeInputFocus = (): void => {
    const elements = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      ".form-comment input, .form-comment textarea, .form-comment select"
    );
  
    // Focus event
    elements.forEach((element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
      element.addEventListener("focus", function(this: HTMLElement) {
        const formGroup = this.closest(".form-group");
        if (formGroup) {
          formGroup.classList.add("focused");
        }
      });
    });
  
    // Blur event
    elements.forEach((element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
      element.addEventListener("blur", function(this: HTMLElement) {
        const inputValue = (this as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value;
        const formGroup = this.closest(".form-group");
        
        if (inputValue === "") {
          this.classList.remove("filled");
          formGroup?.classList.remove("focused");
        } else {
          this.classList.add("filled");
        }
      });
    });
  
    // Check for pre-filled inputs
    elements.forEach((element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
      if (element.value !== "") {
        const formGroup = element.closest(".form-group");
        if (formGroup) {
          formGroup.classList.add("focused");
          element.classList.add("filled");
        }
      }
    });
  };