import cv2
import time
import psutil

# Function to perform face detection and recognition
def main(video_source=0):
    # Load your pre-trained model files
    config_file = "./deploy.prototxt"  # Update the path
    model_file = "./res10_300x300_ssd_iter_140000_fp16.caffemodel"  # Update the path
    
    try:
        # Load the DNN model from Caffe
        net = cv2.dnn.readNetFromCaffe(config_file, model_file)
    except Exception as e:
        print("Error loading the DNN model:", e)
        return

    # Initialize video capture (webcam)
    cap = cv2.VideoCapture(video_source)
    
    # Performance measurement variables
    start_time = time.time()
    frame_count = 0

    while True:
        # Capture frame-by-frame
        ret, frame = cap.read()
        if not ret:
            print("Failed to capture frame")
            break

        # Start the detection timer
        detection_start = time.time()

        # Prepare the frame for face detection
        h, w = frame.shape[:2]
        blob = cv2.dnn.blobFromImage(cv2.resize(frame, (300, 300)), 1.0, (300, 300), (104.0, 177.0, 123.0))

        # Pass the blob through the network
        net.setInput(blob)
        detections = net.forward()

        # Detection time
        detection_end = time.time()
        detection_time = detection_end - detection_start
        print(f"Detection Time: {detection_time:.4f} seconds")

        # Loop through the detections and draw boxes around faces
        for i in range(detections.shape[2]):
            confidence = detections[0, 0, i, 2]
            if confidence > 0.5:  # Confidence threshold
                box = detections[0, 0, i, 3:7] * [w, h, w, h]
                (startX, startY, endX, endY) = box.astype("int")
                # Draw the bounding box for the face
                cv2.rectangle(frame, (startX, startY), (endX, endY), (0, 255, 0), 2)

        # Display the frame
        cv2.imshow('Face Detection', frame)
        
        # Update the frame count
        frame_count += 1

        # Check for memory and CPU usage
        memory_info = psutil.Process().memory_info()
        cpu_usage = psutil.cpu_percent(interval=0.1)
        print(f"Memory usage: {memory_info.rss / 1024 ** 2:.2f} MB, CPU usage: {cpu_usage}%")

        # Break the loop if 'q' is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # End time for FPS calculation
    end_time = time.time()

    # Calculate FPS
    fps = frame_count / (end_time - start_time)
    print(f"FPS: {fps:.2f}")

    # Release the video capture and close windows
    cap.release()
    cv2.destroyAllWindows()

# Run the main function with webcam source 0 (default)
main(0)
