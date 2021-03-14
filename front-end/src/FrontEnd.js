import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';

export class FrontEnd extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
      }
      header {
        background: green;
      }
      main {
        background: orange;
      }
      footer {
        background: pink;
      }
    `;
  }

  constructor() {
    super();
    this.title =  '';
  }

  render() {
    return html`
    <header>this is the header</header>
      <main>
        <h1>welcome to the main event</h1>
        <button @click="${this.buttonClickTest}">get a thing</button>
        ${this.title}
      </main>
    <div class="app-footer"><p>footer test text</p></div>
    `;
  }

  async buttonClickTest() {
    const request = await fetch('api/test');
    const result = await request.json();
    this.title = result.title
  }
}
