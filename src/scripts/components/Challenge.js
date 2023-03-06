export class Challenge {
    constructor() {
        this.list = [
            {
                title: "Pão de Açúcar",
                area: "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosaamet sint. Velit officia consece duis enim velit mollit.",
                file: "item-list-1.png",
            },
            {
                title: "Cristo Redentor",
                area: "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosaamet sint. Velit officia consece duis enim velit mollit.",
                file: "item-list-2.png",
            },
            {
                title: "Ilha Grande",
                area: "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosaamet sint. Velit officia consece duis enim velit mollit.",
                file: "item-list-3.png",
            },
            {
                title: "Centro Histórico de Paraty",
                area: "Amet minim mollit non deserunt ullamco est sit aliqua dolor dosaamet sint. Velit officia consece duis enim velit mollit.",
                file: "item-list-4.png",
            },
        ];
        this.selectors();
        this.events();
    }

    selectors() {
        this.form = document.querySelector(".main-form");
        this.imageInput = document.querySelector("#form-input-img");
        this.titleInput = document.querySelector("#ftitle");
        this.descriptionInput = document.querySelector("#ftextarea");
        this.previewImg = document.querySelector("#preview-img-input");
        this.newItem = document.querySelector(".container-item-list");
    }

    events() {
        this.form.addEventListener("submit", this.addItemsToList.bind(this));
        this.imageInput.addEventListener("change", this.imageReader.bind(this));
    }

    addItemsToList(e) {
        e.preventDefault();
        const currentImgInput = sessionStorage.getItem("imageURL");
        const currentTitle = e.target["ftitle"].value;
        const currentDescription = e.target["ftextarea"].value;

        if (currentImgInput && currentTitle && currentDescription) {
            const item = {
                file: currentImgInput,
                title: currentTitle,
                area: currentDescription,
            };

            this.list.push(item);
            $(".container-item-list").slick(
                "slickAdd",
                `<div data-test="item-list" class="item-list">
                 <img  data-test="image-item-list"
                 class="image-item-list" src='${item.file}' alt='' />
                 <h2 data-test="title-item-list" class="title-item-list">${item.title}</h2>
                 <p
                 class="description-item-list" data-test="input-descrição">${item.area}</p>
              </div>`
            );
        }
        this.resetInputs();
    }

    imageReader() {
        const readerFile = new FileReader();
        readerFile.onload = function () {
            sessionStorage.setItem("imageURL", readerFile.result);
            document.querySelector("#preview-img-input").src = readerFile.result;
        };
        readerFile.readAsDataURL(this.imageInput.files[0]);
    }

    renderInputs() {
        let itemStructure = "";
        this.list.forEach(function (item) {
            itemStructure += `
            <div class="item-list">
               <img class="image-item-list" src='${item.file}' alt='' />
               <h2 class="title-item-list">${item.title}</h2>
               <p data-test="description-item-list" class="description-item-list">${item.area}</p>
            </div>`;
        });
        this.newItem.innerHTML = itemStructure;
    }

    resetInputs() {
        this.previewImg.src = "";
        this.imageInput.value = "";
        this.titleInput.value = "";
        this.descriptionInput.value = "";
    }
}
