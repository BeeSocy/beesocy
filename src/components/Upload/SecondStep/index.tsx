import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdAddCircleOutline, MdClose, MdDelete } from 'react-icons/md';
import { Button } from '../../Widgets/Buttons/Button';
import {
  AddButton,
  Container,
  Content,
  FilesContainer,
  ImageCard,
  NextStepButton
} from './styles';

interface IUploadSecondStep {
  firstStepFiles: string[];
}

export function UploadSecondStep({ firstStepFiles }: IUploadSecondStep) {
  const [files, setFiles] = useState<string[]>();

  const { getInputProps, getRootProps, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        'image/png': [],
        'image/jpeg': [],
        'image/webp': []
      },
      multiple: true,
      onDrop: acceptedFiles =>
        setFiles(state =>
          state?.concat(acceptedFiles.map(file => URL.createObjectURL(file)))
        )
    });

  useEffect(() => {
    setFiles(firstStepFiles);
  }, []);

  return (
    <Container {...getRootProps({ isDragAccept, isDragReject })}>
      <Content isDragAccept={isDragAccept} isDragReject={isDragReject}>
        <FilesContainer>
          <AddButton aria-label="add-button">
            <MdAddCircleOutline />
          </AddButton>
          {files?.map((file, index) => (
            <ImageCard
              key={file}
              onClick={event => {
                event.stopPropagation();
                setFiles(files.filter(filteredFile => filteredFile != file));
              }}
            >
              <Button rounded full={false}>
                <MdClose size={20} />
              </Button>
              <img src={file} />
            </ImageCard>
          ))}
        </FilesContainer>

        <input {...getInputProps()} />
        <NextStepButton disabled={(files ?? []).length < 1}>
          Continuar envio
        </NextStepButton>
      </Content>
    </Container>
  );
}
