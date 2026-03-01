import type { ProgrammingItem } from "../types";

const item: ProgrammingItem = {
  id: "2",
  title: "Machine Learning Model Optimization for Edge Computing: A Comparative Study",
  authors: ["Nam Doan"],
  year: "2024",
  conference: "Technical Report",
  abstract:
    "This report presents a comprehensive comparative analysis of model compression techniques for deploying neural networks on edge devices. We evaluate three principal methods — weight pruning, post-training quantization, and knowledge distillation — across four representative architectures: MobileNetV3, EfficientNet-Lite, ResNet-18, and a custom 3-layer MLP for tabular IoT sensor data. Experiments show an 85% model-size reduction is achievable with less than 1.5% top-1 accuracy drop on the target tasks when techniques are combined systematically.",
  tags: ["Machine Learning", "Edge Computing", "Python", "TensorFlow", "Model Compression"],
  link: "#",
  sections: [
    {
      num: "1",
      heading: "Introduction",
      content: [
        {
          type: "paragraph",
          text: "Deploying deep learning models on microcontrollers and embedded Linux SBCs is no longer an academic curiosity — it is a commercial necessity. Keyword spotting in hearables, anomaly detection in industrial sensors, and gesture recognition in wearables all require inference to run locally, without cloud round-trips, to meet latency and privacy constraints.",
        },
        {
          type: "paragraph",
          text: "Yet the models that achieve state-of-the-art accuracy on benchmark datasets rarely fit within the 256–512 KB of flash and 64–256 KB of RAM available on target MCUs. This study systematically applies and combines three standard compression techniques, measures their trade-offs on real edge hardware (Raspberry Pi Zero 2W and STM32H7), and provides a decision framework for practitioners.",
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "Neural network visualization",
          caption:
            "Figure 1. Schematic representation of a sparse neural network after structured pruning. Grey nodes are removed; teal edges represent surviving weights above the pruning threshold.",
          figNum: 1,
        },
      ],
    },
    {
      num: "2",
      heading: "Methods",
      content: [
        {
          type: "paragraph",
          text: "All experiments share a common baseline: models pre-trained on ImageNet (for vision) or a custom 12-class sensor-fault dataset (for the MLP). Compression is applied in a fixed order — pruning first, then quantization, then distillation into a smaller student — so that each stage builds on gains from the previous.",
        },
        {
          type: "figure",
          src: "https://images.unsplash.com/photo-1593955654387-9dcbc8ef8071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
          alt: "Edge computing chip processor",
          caption:
            "Figure 2. Target inference hardware: Raspberry Pi Zero 2W (left) and STM32H743 Nucleo board (right). Flash and RAM constraints differ by two orders of magnitude.",
          figNum: 2,
        },
        {
          type: "paragraph",
          text: "Post-training quantization is performed using TensorFlow Lite's full-integer quantization path. The representative dataset for activation range calibration consists of 200 randomly-sampled images from the validation split. Weight quantization is straightforward; activation quantization requires careful calibration to avoid accuracy collapse on layers with large dynamic ranges.",
        },
        {
          type: "code",
          language: "python",
          caption:
            "Listing 1. TFLite full-integer post-training quantization with representative dataset.",
          code: `import tensorflow as tf
import numpy as np

def representative_dataset():
    for img in calibration_images[:200]:
        yield [np.expand_dims(img.astype(np.float32) / 255.0, 0)]

def quantize_to_int8(saved_model_path: str) -> bytes:
    converter = tf.lite.TFLiteConverter.from_saved_model(saved_model_path)
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    converter.representative_dataset = representative_dataset
    converter.target_spec.supported_ops = [
        tf.lite.OpsSet.TFLITE_BUILTINS_INT8
    ]
    converter.inference_input_type  = tf.int8
    converter.inference_output_type = tf.int8
    return converter.convert()`,
        },
      ],
    },
    {
      num: "3",
      heading: "Results",
      content: [
        {
          type: "paragraph",
          text: "The combined pipeline (pruning → INT8 quantization → distillation) achieves the best size-accuracy trade-off. MobileNetV3-Small shrinks from 14.0 MB to 2.1 MB (85% reduction) while dropping only 1.1% top-1 accuracy on the ImageNet validation set. Latency on the Raspberry Pi Zero 2W drops from 310 ms to 43 ms per inference.",
        },
        {
          type: "list",
          items: [
            "Pruning alone (70% sparsity): −61% size, −0.6% accuracy",
            "INT8 quantization: −4× size, −0.4% accuracy",
            "Knowledge distillation to half-width student: additional −45% size, −0.3% accuracy",
            "Combined pipeline: −85% total size, −1.1% accuracy, 7.2× latency improvement",
          ],
        },
      ],
    },
  ],
};

export default item;
