package com.velankani.proctoring.service.config;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;

import org.apache.tomcat.util.codec.binary.Base64;
 
public class ImageToBase64 {
	public static void main(String...s) throws Exception{
		
		//encode image to Base64 String
		File f = new File("C:\\Users\\velankani.BLR\\Desktop\\harish.jpg");		//change path of image according to you
		FileInputStream fis = new FileInputStream(f);
		byte byteArray[] = new byte[(int)f.length()];
		fis.read(byteArray);
		String imageString = Base64.encodeBase64String(byteArray);
		System.out.println("Converted image " +imageString);
		
		//decode Base64 String to image
		FileOutputStream fos = new FileOutputStream("C:\\\\Users\\\\velankani.BLR\\\\Desktop\\\\Decodedharish.jpg"); //change path of image according to you
		byteArray = Base64.decodeBase64(imageString);
		fos.write(byteArray);
 
		fis.close();
		fos.close();
	}
}
