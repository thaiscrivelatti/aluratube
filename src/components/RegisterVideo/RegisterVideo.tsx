import { ChangeEvent, useState } from "react";
import { StyledRegisterVideo } from "./style";

interface FormValues {
  titulo: string;
  url: string;
}

const formValues: FormValues = {
  titulo: "",
  url: "",
};

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: formValues,
  });
  const [formVisible, setFormVisible] = useState(false);

  function closeModal() {
    formCadastro.clearForm();
    setFormVisible(false);
  }

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        +
      </button>
      {formVisible && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            closeModal();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={closeModal}
            >
              X
            </button>
            <input
              placeholder="Título do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL do vídeo"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit"> Adicionar </button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}

function useForm(props: any) {
  const [values, setValues] = useState(props.initialValues);
  return {
    values,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const name = event.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues(formValues);
    },
  };
}
