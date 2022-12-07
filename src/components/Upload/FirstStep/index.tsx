import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdUpload } from 'react-icons/md';
import { useModal } from '../../../context/ModalProvider/useModal';
import { Title } from '../../General/Title';
import { UploadSecondStep } from '../SecondStep';
import { Container, Content, FileButton, LineTitle } from './styles';

export function UploadFirstStep() {
  const [files, setFiles] = useState<string[]>();

  const {
    getInputProps,
    getRootProps,
    acceptedFiles,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: {
      'image/png': [],
      'image/jpeg': [],
      'image/webp': [],
      'audio/mpeg': ['.mp3']
    },
    multiple: false,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => URL.createObjectURL(file)));
      const fileIsImage = acceptedFiles.every(file =>
        file.type.includes('image')
      );
      if (fileIsImage) {
        handleUploadSecondStep([URL.createObjectURL(acceptedFiles[0])]);
        return;
      }
    }
  });

  const { handleCallModal } = useModal();

  function handleUploadSecondStep(files: string[]) {
    handleCallModal(<UploadSecondStep firstStepFiles={files} />, {
      center: true,
      overlay: true
    });
  }

  return (
    <Container {...getRootProps({ isDragAccept, isDragReject })}>
      <Content isDragAccept={isDragAccept} isDragReject={isDragReject}>
        <MdUpload size={150} />
        <Title size="small">
          Arraste e solte arquivos para realizar o envio
        </Title>
        <LineTitle>ou</LineTitle>
        <FileButton>Selecionar arquivos</FileButton>
        <input {...getInputProps()} multiple={false} />
      </Content>
    </Container>
  );
}
