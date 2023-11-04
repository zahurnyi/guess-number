document.body.style.background = '#363062';

const container = document.createElement('div');
const example = document.createElement('div');
const num1 = document.createElement('span');
const num2 = document.createElement('span');
const input = document.createElement('input');
const button = document.createElement('button');

container.classList.add('container')

button.textContent = 'check'

const randomNumber1 = Math.floor(Math.random() * 99);
const randomNumber2 = Math.floor(Math.random() * 99);

num1.textContent = randomNumber1;
num2.textContent = randomNumber2;

example.append(num1, '+', num2);
container.append(example, input, button);

document.body.append(container);

button.onclick = () => {
  const userAnswer = Number(input.value);
  const correctAnswer = randomNumber1 + randomNumber2;

  if (correctAnswer === userAnswer) {
    new CreatePopap(
      document.body,
      'div',
      '700px',
      '700px',
      'You are amazing',
      'right'
		).right()
		setTimeout(() => {
			window.location.reload();
		}, 1000)
  } else {
    new CreatePopap(
      document.body,
      'div',
      '700px',
      '700px',
      'Something went wrong, try again stupid motherfucker',
      'wrong'
    ).wrong()
  }
}

class CreatePopap {
  constructor(parentElement, element, width, height, textContent, style) {
    this.popap = document.createElement(element);
    this.popap.style.width = width;
    this.popap.style.height = height;
    this.popap.textContent = textContent;
    this.popap.classList.add(style);
    parentElement.append(this.popap);
  }

  right() {
    new CreatButton(
      this.popap,
      'button',
      'next',
    )
  }
  wrong() {
    new CreatButton(
      this.popap,
      'button',
      'next',
    )
  }

  hidePopap() {
    this.popap.style.display = 'none';
  }
}

class CreatButton {
  constructor(parentElement, element, textContent) {
    this.btn = document.createElement(element);
    this.btn.textContent = textContent;
    parentElement.append(this.btn)

    this.btn.onclick = () => {
      parentElement.style.display = 'none'
    }
  }

}
