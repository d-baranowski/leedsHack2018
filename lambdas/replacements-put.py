import boto3
import json
from http import HTTPStatus


client = boto3.client('dynamodb', region_name='eu-west-2')


def lambda_handler(event, context):
    
    body = json.loads(event['body'])
    
    replacementId = event['pathParameters']['replacementId']
    textPattern = body['textPattern']
    replacementTexts = body['replacementTexts']
    
    try:
        response = client.put_item(
            TableName='Replacements',
            Item={
                'replacementId': { 'S': replacementId },
                'textPattern': { 'S': textPattern },
                'replacementTexts': { 'SS': replacementTexts }
            }
        )
    except Exception as error:
        print(error)
        return {
            'statusCode': HTTPStatus.INTERNAL_SERVER_ERROR,
            'body': json.dumps({'error': 'Unable to insert item'})
        }
        
    print(response)
    
    return {
        'statusCode': HTTPStatus.OK
    }
    