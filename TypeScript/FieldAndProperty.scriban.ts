#{{ fieldName }}: {{ type }}
get {{ fieldName }}() { return this.#{{ fieldName }}; }
set {{ fieldName }}(value: {{ type }}) { this.#{{ fieldName }} = value; }