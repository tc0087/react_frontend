import AWS from 'aws-sdk'

AWS.config = new AWS.Config();

console.log(process.env.REACT_APP_AWS_PUBLIC_KEY)

AWS.config.accessKeyId = process.env.REACT_APP_AWS_PUBLIC_KEY
AWS.config.secretAccessKey = process.env.REACT_APP_AWS_PRIVATE_KEY
AWS.config.region = 'us-east-1'



export const uploadMedia = (buffer, bucket, contentType) => {
	return new Promise((resolve, reject) => {
		let putObject = {
			Key: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
			Body: buffer,
			ContentEncoding: 'base64',
			ContentType: contentType
		}
		let s3Bucket = new AWS.S3( { params: {Bucket: bucket} } )
		return new Promise((resolve, reject) => {
			s3Bucket.upload(putObject, (err, res) => {
				if(err){
					reject(err)
				}else{
					console.log(res)
					resolve(res)
				}
			})
		})
	})
}
	
