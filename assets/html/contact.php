<?php
	if(isset($_POST['submit'])) {
		$sender = $_POST['sender'];
		$email = $_POST['email'];
		$company = $_POST['company'];
		$website = $_POST['website'];
		$message = $_POST['message'];
		$from = 'Website Contact Form';
		$to = 'gravitate.contact@gmail.com';
		$subject = 'Message from website form';
		$body = "From: $name/n E-Mail: $email/n Message:/n $message";

		// Check if name has been entered
		if(!$_POST['name']) {
			$errName = 'Please enter your name';
		}

		// Check if email has been entered
		if(!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}

		// Check if company name has been entered
		if(!$_POST['company']) {
			$errCompany = 'Please enter your company name';
		}

		// Check if website address has been entered
		if(!$_POST['website']) {
			$errWebsite = 'Please enter your company web address';
		}

		// Check if a message has been entered
		if(!$_POST['message']) {
			$errMessage = 'Please enter a message';
		}
	}

	// If there are no errors, email the form
	if(!$errName && !$errEmail && !$errCompany && !$errWebsite && !$errMessage) {
		if(mail($to, $subject, $body, $from)) {
			$result = '<div class="sent">Thank you for your interest! We will be in touch.</div>';
		} else {
			$result = '<div class="notSent">Sorry, there was an error sending your message. Please try again later.</div>';
		}
	}
?>