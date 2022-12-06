import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdUpload } from 'react-icons/md';
import { Title } from '../../General/Title';
import { Container, Content, FileButton, LineTitle } from './styles';

export function UploadFirstStep() {
  const [files, setFiles] = useState<string[]>();

  const { getInputProps, getRootProps, open, isDragAccept, isDragReject } =
    useDropzone({
      accept: {
        'image/png': [],
        'image/jpeg': [],
        'image/webp': [],
        'audio/mpeg': ['.mp3']
      },
      multiple: true,
      onDrop: acceptedFiles =>
        setFiles(acceptedFiles.map(file => URL.createObjectURL(file)))
    });

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <Container {...getRootProps({ isDragAccept, isDragReject })}>
      <Content isDragAccept={isDragAccept} isDragReject={isDragReject}>
        <MdUpload size={150} />
        <Title size="small">
          Arraste e solte arquivos para realizar o envio
        </Title>
        <LineTitle>ou</LineTitle>
        <FileButton>Selecionar arquivos</FileButton>
        <input {...getInputProps()} />
      </Content>
    </Container>
  );
}
